import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    const anchor = document.createElement('a');
    anchor.href = `https://drive.google.com/uc?export=download&id=1o2v7OyDkBc5XYZmSRGMcP-im6Ge7guD8`;

    // Specify the filename for the downloaded file
    anchor.download = 'Nimish_Shah_resume.pdf';

    // Append the anchor to the body (necessary for Firefox)
    document.body.appendChild(anchor);

    // Programmatically trigger the click event
    anchor.click();

    // Remove the anchor from the document
    document.body.removeChild(anchor);
  }, []);
  return <></>;
}
