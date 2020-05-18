import React, { ReactElement } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { RequireAtLeast } from '../services/utils';

type Props = RequireAtLeast<DropzoneOptions, 'onDrop'> & { preview?: string };

function Dropzone(props: Props): ReactElement {
  const { preview } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone(props);

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag and Drop some files here, or click to select files</p>
      }
      {preview ? <img src={preview} alt="Thumbnail" /> : null}
    </div>
  );
}

export default Dropzone;
