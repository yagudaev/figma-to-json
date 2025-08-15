# Figma To JSON 💾

A set of tools to programatically work with Figma files as JSON. You can use these to read and write your own figma documents without opening figma.

[🔥 Live Demo 🔥](https://www.figma2json.com)

![Figma to JSON Plugin Screenshot](website/public/assets/images/plugin-screenshot.png)

## Motivation 🤔

We believe you should own your data and be able to browse, edit and export anything you choose out of your design tools.

In an era of AI 🤖 and Open Source software, we believe design formats should also be open-source. This is our gift to the community 🎁.

## Quick Start ⚡️

### Install the plugin

1. Download the latest release https://github.com/yagudaev/figma-to-json/releases
2. Unzip the file to a folder
3. In the Figma desktop app, open a Figma document.
4. Search for and run `Import plugin from manifest…` via the Quick Actions search bar.
5. Select the manifest you unzipped in step 2

### Usage

https://user-images.githubusercontent.com/1386966/191097407-02263aec-f335-4c3b-92c6-e475cc3b53f1.mp4

1. In the Figma desktop app, open a Figma document.
2. Search for an run `Figma To JSON` via the Quick Actions search bar.
3. Click `Download JSON` and select a folder to download to

Now you can inspect the JSON file with any text editor. We recommend using VS Code.

## Supported Formats ✅

### .fig files

Figma files ending with [.fig are private and internal](https://forum.figma.com/t/inquiry-about-the-fig-file-format/6351). However, since figma does not provide a write API it is useful to create new designs.

Futhermore, if the Figma REST API is down you can be sure to use this format.

### Figma Plugin JSON

Figma Plugin API uses a different JSON shape to the REST API. It only works when running inside of Figma Editor.

### Figma Rest API (Coming soon)

Figma REST API provides a way to access other files by Plugins and for automating workflows without running Figma.

The REST API is developed by a separate team at Figma and contains read-only functionality. This means the [format of the data can differ significantly](https://forum.figma.com/t/need-help-with-gradienttranform-matrix/26792) from that expected by the Plugin API.

In the future we would like to have a way of transforming between the REST API to the Plugin API. This will allow us to pull arbitrary Figma urls without having to open Figma Desktop first.

## Other Formats 📄

### SVG Export

SVG is an industry standard, but the spec is very large and each [design editor only implements a subset of it](https://www.figma.com/blog/with-figmas-new-svg-exports-less-more/).

For that reason, when Figma exports to SVG it removes certain metadata. E.g. Text gets converted to a path instead of using the SVG `<Text>` tag. This makes it harder for other design tools to work with.

### OpenDesign

[OpenDesign](http://opendesign.dev/) was an incredible initiative to create a uniform format we can share across design tools. The format is called Octopus. It supports most of the features of Figma, [https://opendesign.dev/docs/design-format-support](https://opendesign.dev/docs/design-format-support).

Parts of the stack like the render are not fully-open source, so sadly we couldn't simply extend their work yet.

OpenDesign was shutdown on Oct 1st, 2023.

### VeryGoodGraphics

[VeryGoodGraphics](https://docs.verygoodgraphics.com/) is an alternative to OpenDesign. It is the next-gen vector graphics which has an open format called [VGG Specs](https://docs.verygoodgraphics.com/specs/overview) that is open, readable and compatible with popular design tools and formats.

Although VGG has its application for cross-platform design-as-code UI development, the VGG format is well-designed and well-documented to be useful for other purposes.

VGG provides an online service called [Daruma](https://verygoodgraphics.com/daruma) for converting and rendering other design files, including .fig files. The .fig converter are not open-sourced yet, however, they open-sourced their C++ Sketch converter [vgg_sketch_parser](https://github.com/verygoodgraphics/vgg_sketch_parser).

### Penpot

Penpot is a fantastic editor trying to leverage SVG to work across design tools. However as mentioned SVG is not perfect and we need a specialized [import from Figma which is not yet ready](https://github.com/penpot/penpot/issues/2265).

### .sketch

Sketch team provides a command line tool to convert .fig files into Sketch design, [fig2sketch](https://github.com/sketch-hq/fig2sketch/)

### Framer

Framer can import Figma Files through the REST API.

## Contribution

Please feel free to fork the repo and create pull requests. If you find a bug report it, if you have ideas and want to have a discussion use the discussion tab 😁.

## Special Thanks

- Yuan Qing Lim for https://github.com/yuanqing/create-figma-plugin
- Figma Plugin Helper Functions: https://github.com/figma-plugin-helper-functions/figma-plugin-helpers
- Brian Lovin for https://github.com/brianlovin/figma-export-zip
- Boiao Ch for cracking reading .fig files in: https://github.com/liaobinbin/fig-to-json

# Other Interesting Projects

- https://pavellaptev.github.io/JSON-from-Figma/

