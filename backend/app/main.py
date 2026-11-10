from fastapi import FastAPI

app = FastAPI(title="TripPuzzle API")

@app.get("/api/health")
def health():
    return {"status": "ok"}
