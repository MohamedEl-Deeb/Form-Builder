import { Box, Card, Chip, Stack, Typography } from "@mui/material";
import type { Control } from "react-hook-form";
import { useWatch } from "react-hook-form";
import type { Form } from "../../types/Form";
import { FormElementEditor } from "./FormElementEditor";
import { FormElementPreview } from "./FormBuilderPreview";

interface FormElementBuilderProps {
  index: number;
  isActive: boolean;
  onFocus: () => void;
  control: Control<Form>;
}

const typeLabels: Record<string, string> = {
  "text-input": "Short answer",
  "select-input": "Multiple choice",
  "file-upload": "File upload",
};

export const FormElementBuilder = ({
  index,
  isActive,
  onFocus,
  control,
}: FormElementBuilderProps) => {
  const element = useWatch({
    control,
    name: `elements.${index}`,
  });

  return (
    <Card
      onClick={!isActive ? onFocus : undefined}
      sx={{
        position: "relative",
        p: { xs: 2, md: 2.5 },
        mb: 2.5,
        cursor: isActive ? "default" : "pointer",
        border: "1px solid",
        borderColor: isActive ? "primary.main" : "divider",
        boxShadow: isActive
          ? "0 18px 48px rgba(79, 70, 229, 0.16)"
          : "0 10px 30px rgba(15, 23, 42, 0.06)",
        outline: isActive ? "4px solid rgba(99, 102, 241, 0.12)" : "none",
        overflow: "hidden",
        transition: "border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease",
        "&:hover": {
          transform: isActive ? "none" : "translateY(-2px)",
          borderColor: isActive ? "primary.main" : "primary.light",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 5,
          bgcolor: isActive ? "primary.main" : "transparent",
        },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Box>
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.2 }}>
            Question {index + 1}
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: 1.25 }}>
            {element?.title?.trim() || "Untitled question"}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip size="small" label={typeLabels[element?.type ?? ""] ?? "Field"} />
          {element?.required ? <Chip size="small" color="primary" label="Required" /> : null}
          {!isActive ? <Chip size="small" variant="outlined" label="Click to edit" /> : null}
        </Stack>
      </Stack>

      <Box sx={{ position: "relative" }}>
        {isActive ? (
          <FormElementEditor index={index} control={control} />
        ) : (
          <FormElementPreview index={index} control={control} />
        )}
      </Box>
    </Card>
  );
};
