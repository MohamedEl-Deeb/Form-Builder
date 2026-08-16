import { Box, Divider, FormControlLabel, MenuItem, Stack, Switch, TextField, Typography } from "@mui/material";
import { Controller, useWatch, type Control } from "react-hook-form";
import type { Form } from "../../types/Form";
import { SelectOptionsEditor } from "./SelectOptionsEditor";

interface FormElementEditorProps {
  index: number;
  control: Control<Form>;
}

export const FormElementEditor = ({
  index,
  control,
}: FormElementEditorProps) => {
  const type = useWatch({
    control,
    name: `elements.${index}.type`,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.25 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Controller
          name={`elements.${index}.title`}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Question"
              placeholder="What would you like to ask?"
              helperText="The question remains visible while you edit, so the canvas no longer jumps between modes."
            />
          )}
        />

        <Controller
          name={`elements.${index}.type`}
          control={control}
          render={({ field }) => (
            <TextField {...field} select label="Answer type" sx={{ minWidth: { md: 220 } }}>
              <MenuItem value="text-input">Short answer</MenuItem>
              <MenuItem value="select-input">Multiple choice</MenuItem>
              <MenuItem value="file-upload">File upload</MenuItem>
            </TextField>
          )}
        />
      </Stack>

      <Divider />

      <Controller
        name={`elements.${index}.required`}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            sx={{ alignSelf: "flex-start", m: 0 }}
            label={
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Require an answer
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Respondents must complete this field before submitting.
                </Typography>
              </Box>
            }
            control={
              <Switch
                checked={!!field.value}
                onChange={(_, checked) => field.onChange(checked)}
              />
            }
          />
        )}
      />

      {type === "select-input" && (
        <SelectOptionsEditor control={control} index={index} />
      )}
    </Box>
  );
};
