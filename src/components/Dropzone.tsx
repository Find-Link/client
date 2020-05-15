import React, { ReactElement } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { RequireAtLeast } from '../services/utils';

type Props = RequireAtLeast<DropzoneOptions, 'onDrop'>;

function Dropzone(props: Props): ReactElement {
  const { getRootProps, getInputProps, isDragActive } = useDropzone(props);

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag and Drop some files here, or click to select files</p>
      }
    </div>
  );
}

export default Dropzone;
