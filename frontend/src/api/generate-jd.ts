import axios from "axios";

interface GenerateJDProps {
  industry: string;
  jobTitle: string;
  location: string;
  experience: string;
  keySkills?: string;
  education?: string;
  roles?: string;
  behavioralSkills?: string;
  certification?: string;
  anyOther?: string;
  model?: string;
  creativity?: string;
  contentLength?: string;
  endpoint?: string;
}

interface GenerateJDResponse {
  message: string;
  url: string;
}

function delay() {
  return new Promise((res) => {
    setTimeout(res, 5000);
  });
}

export async function generateJD(
  props: GenerateJDProps
): Promise<GenerateJDResponse> {
  const data = {
    job_title: props.jobTitle,
    industry: props.industry,
    location: props.location,
    experience: props.experience,
    educational_qualification: props.education,
    key_responsibilities: props.keySkills,
    behavioural_skills: props.behavioralSkills,
    certifications: props.certification,
    Technical_skills: "",
    model: props.model,
    creativity: props.creativity,
    token: "medium",
  };

  const res = await axios.request({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    method: "post",
    url: "/create-jd",
    data,
  });
  return res.data as GenerateJDResponse;
}
