# from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from app.lib.create_jd import create_job_description

# Load environment variables from the .env file
# load_dotenv()

app = FastAPI()

@app.get("/example")
async def example():
     return "This is FastAPI"

@app.post("/create-jd")
async def generate_jd(request: Request):
        data = await request.json()
                        
        result = await create_job_description(data)
        # download_url = await create_and_upload_blob_file(result['message'], data)
            
        # result['url'] = f"{download_url}{SAS_TOKEN}"
        # Extract the text message from the result
        job_description_text = result['message']

             # Return the text message as a plain text response
        return JSONResponse({"job_description": job_description_text})
