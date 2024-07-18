from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.responses import JsonResponse
from lib.create_jd import create_job_description

# Load environment variables from the .env file
load_dotenv()

app = FastAPI()

@app.get("/create-jd")
async def generate_jd(request, *args, **kwargs):
    if request.method == "POST":
            data = request.POST.dict()

            data['user_name'] = request.headers.get("X-MS-CLIENT-PRINCIPAL-NAME")
                        
            result = await create_job_description(data)
            # download_url = await create_and_upload_blob_file(result['message'], data)
            
            # result['url'] = f"{download_url}{SAS_TOKEN}"

            return JsonResponse(result)
