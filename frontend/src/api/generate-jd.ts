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

export async function generateJD(props: GenerateJDProps) {
  throw new Error("Something went wrong");

  // this can fail or pass
}
