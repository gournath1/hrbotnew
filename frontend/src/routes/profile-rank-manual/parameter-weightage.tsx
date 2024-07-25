import { useToast } from "@/components/ui/use-toast";
import { produce } from "immer";
import { useCallback, useMemo, useState } from "react";
import { DualButton } from "./dual-button";

export default function ParameterWeightage() {
  const { toast } = useToast();

  const [wtgs, setWtgs] = useState([
    { key: "jobTitle", label: "Job Label", value: 0 },
    { key: "industry", label: "Industry", value: 0 },
    { key: "experienceYears", label: "Experience Years", value: 0 },
    {
      key: "educationalQualification",
      label: "Educational Qualification",
      value: 0,
    },
    { key: "keyResponsibilities", label: "Key Responsibilities", value: 0 },
    { key: "technicalSkills", label: "Technical Skills", value: 0 },
    { key: "behavioralSkills", label: "Behavioral Skills", value: 0 },
    { key: "otherCorses", label: "Other Courses / Certifications", value: 0 },
  ]);

  const remainingWtg = useMemo(() => {
    return 100 - wtgs.reduce((a, c) => a + c.value, 0);
  }, [wtgs]);

  const handleIncrement = useCallback(
    (key: string) => {
      if (remainingWtg === 0) {
        toast({
          title: "No Weightage Left",
          variant: "destructive",
        });
        return;
      }

      setWtgs(
        produce((wtgs) => {
          const wtg = wtgs[wtgs.findIndex((wtg) => wtg.key === key)];
          wtg.value++;
        })
      );
    },
    [remainingWtg]
  );

  const handleDecrement = useCallback((key: string) => {
    setWtgs(
      produce((wtgs) => {
        const wtg = wtgs[wtgs.findIndex((wtg) => wtg.key === key)];
        if (wtg.value > 0) wtg.value--;
      })
    );
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-lg">Parameters Weightage</h2>
        <div>
          Remaining Weightage :{" "}
          <span className="font-bold">{remainingWtg}</span>%
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        {wtgs.map(({ key, value, label }) => (
          <DualButton
            key={key}
            id={key}
            title={label}
            value={value}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
    </div>
  );
}
