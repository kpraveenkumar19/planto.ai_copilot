from fastapi import FastAPI, Request # type: ignore
from pydantic import BaseModel # type: ignore
from transformers import GPT2LMHeadModel, GPT2Tokenizer # type: ignore

# Initialize FastAPI app
app = FastAPI()

# Load pre-trained GPT-2 model and tokenizer
model_name = "gpt2"
model = GPT2LMHeadModel.from_pretrained(model_name)
tokenizer = GPT2Tokenizer.from_pretrained(model_name)

# Define a request model
class CodeRequest(BaseModel):
    prompt: str
    max_length: int = 100

@app.post("/generate-code/")
async def generate_code(request: CodeRequest):
    inputs = tokenizer.encode(request.prompt, return_tensors="pt")
    outputs = model.generate(inputs, max_length=request.max_length, num_return_sequences=1)
    generated_code = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return {"generated_code": generated_code}

# Simple root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to the VS Code Copilot backend!"}