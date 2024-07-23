import requests

def test():
    result = requests.post(  
        f'http://127.0.0.1:8080/create-jd' ,
         json={"job_title": "Software Engineer","industry":"AI","location":"Kolkata","experience":"2","educational_qualification":"B.tech",
                                  "key_responsibilities":"leadership","behavioural_skills":"time management",
                                  "certifications":"Python", "Technical_skills":"react", "model":"3.5", "creativity":"medium", "token":"medium"}

    )
    return result

if __name__ == "__main__":
    output = test()
    print(output.text)