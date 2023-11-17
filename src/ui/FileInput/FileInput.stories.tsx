import React, { ChangeEvent, useCallback, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FileInput from "./index";

const meta: Meta<typeof FileInput> = {
  title: "UI/FileInput",
  component: FileInput,
};

export default meta;

type Story = StoryObj<typeof FileInput>;

const FileInputWithHooks = () => {
  const [file, setFile] = useState<File>();

  const handleFileUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event.target.files[0];
        setFile(file);
      }
    },
    []
  );

  return (
    <FileInput
      value={file?.name}
      onChange={handleFileUpload}
      uploadText={'Upload file:'}
      uploadedText={'Uploaded file:'}
      borderColor={'#000'}
      textColor={'#000'}
      uploadedButtonBgColor={'#000'}
      uploadedButtonColor={'#fff'}
    />
  );
};

export const Primary: Story = {
  render: () => <FileInputWithHooks />,
};
