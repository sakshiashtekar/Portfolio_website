from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
import firebase_admin
from firebase_admin import credentials, firestore
import requests
import os
import json
from dotenv import load_dotenv

# Load Environment Variables 
load_dotenv()

# FastAPI Setup 
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Portfolio Backend is Running"}

# CORS 
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "https://sakshi-ashtekar-portfolio.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Firebase Setup 
from pathlib import Path

secret_path = Path("/etc/secrets/firebase_key.json")

if secret_path.exists():
    cred = credentials.Certificate(str(secret_path))
    if not firebase_admin._apps:
        firebase_admin.initialize_app(cred)
    db = firestore.client()
    print("Firebase initialized from secret file")
else:
    print("Firebase secret file not found")
    db = None

# Models 

class ChatRequest(BaseModel):
    message: str

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

# Chat API 
@app.post("/chat")
def chat(request: ChatRequest):
    try:
        print("Incoming message:", request.message)

        portfolio_context = """
You are the AI assistant for Sakshi Ashtekar's portfolio website.

IMPORTANT RULES:
- Only answer using the information provided below.
- Do NOT invent extra skills or personality traits.
- If something is not available, respond:
  "This information is not available in Sakshi's portfolio."

ABOUT SAKSHI:

Education:
- B.E Computer Engineering (Honors in Data Science), Pune University (GPA: 8.77)
- HSC: 89.3%
- SSC: 75.6%

Experience:
- Graduate Engineer Trainee at LTIMindtree
- React Native Intern at Whatbytes
- Android App Developer Intern at Planet Geo Tech
- Technical Support Intern at Cyret Technologies

Skills:
Frontend: HTML, CSS, React, React Native
Languages: Java, JavaScript
Database: MySQL
Concepts: OOP, DSA
Tools: Git, Azure, Postman
Methodologies: Agile, Scrum
Testing: Manual Testing, JIRA
API: REST APIs

Projects:
- ExpertEase
- Near Miss Incident Reporting Tool
- Nearvana mobile app
- Attendance App with live location tracking

Achievements:
- ACE’s Technical Co-Head
- NSS Volunteer
- Event Anchoring
"""

        headers = {
            "Authorization": f"Bearer {os.getenv('OPENROUTER_API_KEY')}",
            "Content-Type": "application/json",
        }

        payload = {
            "model": "meta-llama/llama-3-8b-instruct",
            "messages": [
                {"role": "system", "content": portfolio_context},
                {"role": "user", "content": request.message}
            ]
        }

        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers=headers,
            json=payload,
            timeout=15
        )

        print("OpenRouter status:", response.status_code)
        print("OpenRouter response:", response.text)

        if response.status_code != 200:
            return {"reply": f"AI error: {response.text}"}

        data = response.json()
        reply = data["choices"][0]["message"]["content"]

        return {"reply": reply}

    except Exception as e:
        print("Chat error:", str(e))
        return {"reply": "Sorry, something went wrong."}


# Contact API 
@app.post("/contact")
def save_contact(request: ContactRequest):
    try:
        print("Saving contact:", request.email)

        db.collection("contacts").add({
            "name": request.name,
            "email": request.email,
            "message": request.message,
            "createdAt": datetime.utcnow()
        })

        return {"status": "success"}

    except Exception as e:
        print("Contact error:", str(e))
        return {"status": "error", "message": str(e)}