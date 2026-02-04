from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="TalentFlow ATS API")


# -------------------------
# 1️⃣ Health Check API
# -------------------------
@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "TalentFlow ATS Backend"
    }


# -------------------------
# 2️⃣ Sample GET Endpoint
# -------------------------
@app.get("/hello")
def say_hello(name: str = "Guest"):
    return {
        "message": f"Hello, {name}! Welcome to TalentFlow ATS"
    }


# -------------------------
# 3️⃣ Sample POST Endpoint
# -------------------------

# Request body model
class LoginRequest(BaseModel):
    email: str
    password: str


@app.post("/login")
def login(data: LoginRequest):
    return {
        "message": "Login data received successfully",
        "email": data.email
    }
