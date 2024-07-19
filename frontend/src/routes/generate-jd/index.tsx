import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AutoComplete from "./auto-complete";
import { Field, FieldType } from "./type";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  industry: z.string(),
  jobTitle: z.string(),
  location: z.string(),
  experience: z.string(),
  keySkills: z.string().optional(),
  education: z.string().optional(),
  roles: z.string().optional(),
  behavioralSkills: z.string(),
  certification: z.string().optional(),
  anyOther: z.string().optional(),
  model: z.enum(["3.5", "4"]).default("3.5"),
  creativity: z.enum(["High", "Medium", "Low"]).default("High"),
  contentLength: z
    .enum(["Small", "Medium", "Large", "X-Large"])
    .default("Large"),
  endpoint: z
    .enum(["Central India", "East US", "Central Sweden"])
    .default("Central India"),
});

type GenerateJDField = Field<z.infer<typeof formSchema>>;

const primaryFields: GenerateJDField[] = [
  {
    type: FieldType.AutoComplete,
    name: "industry",
    label: "Industry",
    description: "AI Labs, Renewable Energy",
    suggestions: ["Agriculture", "IT", "Medical", "Medicine"],
  },
  {
    type: FieldType.AutoComplete,
    name: "jobTitle",
    label: "Job Title",
    description: "Eg. Product Manager",
    suggestions: [],
  },
  {
    type: FieldType.AutoComplete,
    name: "location",
    label: "Location",
    suggestions: [],
  },
  {
    type: FieldType.Input,
    name: "experience",
    label: "Experience (in years)",
    description: "Eg. 10-12 years..",
  },
];

const advancedFields: GenerateJDField[] = [
  {
    type: FieldType.Input,
    name: "keySkills",
    label: "Key Skills / Non-Negotiable Skills",
  },
  {
    type: FieldType.AutoComplete,
    name: "education",
    label: "Educational Qualification",
    suggestions: ["BE", "Graduation", "MA", "B.Com"],
  },
  {
    type: FieldType.Input,
    name: "roles",
    label: "Roles & Responsibility",
  },
  {
    type: FieldType.Input,
    name: "behavioralSkills",
    label: "Behavioral Skills",
  },
  {
    type: FieldType.Input,
    name: "certification",
    label: "Certifications",
  },
  {
    type: FieldType.Input,
    name: "anyOther",
    label: "Any Other",
  },
];

const systemFields: GenerateJDField[] = [
  {
    type: FieldType.Select,
    name: "model",
    label: "Model",
    options: [
      { value: "3.5", label: "3.5" },
      { value: "4", label: "4" },
    ],
  },
  {
    type: FieldType.Select,
    name: "creativity",
    label: "Creativity",
    options: [
      { value: "High", label: "High" },
      { value: "Medium", label: "Medium" },
      { value: "Low", label: "Low" },
    ],
  },
  {
    type: FieldType.Select,
    name: "contentLength",
    label: "Content Length",
    options: [
      { value: "Small", label: "Small" },
      { value: "Medium", label: "Medium" },
      { value: "Large", label: "Large" },
      { value: "XLarge", label: "XLarge" },
    ],
  },
  {
    type: FieldType.Select,
    name: "endpoint",
    label: "Endpoint",
    options: [
      { value: "Central India", label: "Central India" },
      { value: "East US", label: "East US" },
      { value: "Central Sweden", label: "Central Sweden" },
    ],
  },
];

export default function GenerateJD() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      jobTitle: "",
      location: "",
      experience: "",
      keySkills: "",
      education: "",
      roles: "",
      behavioralSkills: "",
      certification: "",
      anyOther: "",
      model: "3.5",
      creativity: "High",
      contentLength: "Large",
      endpoint: "Central India",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function renderField(f: GenerateJDField) {
    switch (f.type) {
      case FieldType.AutoComplete:
        return (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={() => <AutoComplete {...f} />}
          />
        );

      case FieldType.Input:
        return (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{f.label}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>{f.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case FieldType.Select:
        return (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{f.label}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {f.options.map((item) => (
                      <SelectItem value={item.value} key={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>{f.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      default:
        return null;
    }
  }

  return (
    <div className="py-20 container max-w-screen-xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Generate Job Description</h1>
        <p>Generate job description in just few steps</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="lg:grid lg:grid-cols-2 gap-5">
            {primaryFields.map(renderField)}
          </div>

          <Accordion
            type="multiple"
            className="border-neutral-200 border-[1px] p-4 rounded-md"
          >
            <AccordionItem value="advanced-input">
              <AccordionTrigger className="text-xl no-underline font-semibold mb-4">
                Advanced Inputs
              </AccordionTrigger>
              <AccordionContent>
                <div className="lg:grid lg:grid-cols-2 gap-5">
                  {advancedFields.map(renderField)}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="system-input" className="border-b-0">
              <AccordionTrigger className="text-xl no-underline font-semibold mb-4">
                System Input
              </AccordionTrigger>
              <AccordionContent>
                <div className="lg:grid lg:grid-cols-2 gap-5">
                  {systemFields.map(renderField)}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button type="submit" className="w-full" size="lg">
            Generate JD
          </Button>
        </form>
      </Form>
    </div>
  );
}
