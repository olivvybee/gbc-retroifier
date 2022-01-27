import { Link } from 'react-router-dom';

export const AboutPage = () => (
  <div className="container-md my-4">
    <Link to="/">◀ Return home</Link>

    <h2 className="my-4">About</h2>

    <p>
      Retroifier modifies any image to look like it was taken using a Gameboy
      Camera. That is, a 128x128 image with a maximum of four colours and a
      recognisable dithering pattern.
    </p>
    <p>
      The output image is actually 512x512 pixels, so it can be shared to places
      such as Twitter. The 128x128 version is simply scaled up to preserve the
      look of the image. Each pixel in the original is turned into four pixels
      in the output, so there are no scaling artefacts.
    </p>
    <p>
      This tool was created by{' '}
      <a href="https://twitter.com/olivvybee" target="_blank" rel="noreferrer">
        @olivvybee
      </a>{' '}
      and is based on{' '}
      <a href="https://maple.pet/webgbcam" target="_blank" rel="noreferrer">
        webgbcam by maple "mavica" syrup
      </a>
      , which does the same thing using a webcam. Retrofier was created because
      webgbcam doesn't support uploading images.
    </p>
    <p>
      The colour palettes were chosen by searching for "gameboy" on{' '}
      <a
        href="https://lospec.com/palette-list/tag/gameboy"
        target="_blank"
        rel="noreferrer">
        Lospec
      </a>{' '}
      and picking ones with four colours that looked cool or interesting.
    </p>

    <h3 className="my-4">Where do my images go when I upload them?</h3>
    <p>
      Simple answer: absolutely nowhere. When you choose an image, it isn't
      being uploaded anywhere, because the tool works entirely in your own
      browser. There is no server involved. You can verify this by disconnecting
      from the internet after loading the page, because the tool will still
      work.
    </p>
  </div>
);
