# Challenge: Render 3D objects from Pandaset Dataset

Instructions are [here](CHALLENGE.md).
The idea is similar to [PandaSet by Hesai and Scale AI](https://pandaset.org/)

## Development


### Execution Locally

1. Download frames: 
```bash
bash scripts/get_frames.sh
```

2. Start static serving
```bash
npm run frames-serve
```

3. start the app:
```bash
npm run start
```

4. Open your browser at [localhost](http://localhost:1234)
  1. in the left upper corner, you will find a "timetravel" combobox (it could be nice)
### Libs

parcel:
- https://parceljs.org/getting-started/webapp/

drei: 
- https://drei.docs.pmnd.rs/getting-started/introduction

r3f: 
- https://r3f.docs.pmnd.rs/api/canvas

### Evaluation Criteria

- [x] **Functionality**: Does the application fulfill the primary requirements?
  - OK: Cuboids and Points are being rendered correctly
  - (?): They don't look in the correct axis, they look rotated (it is a camera problem more than data)

- [x] **Code Quality**: Is the code well-organized, easy to read, and follows best practices?
  - OK: it doesn't need a whole big folder structure, the current codebase looks similar to:
<!-- tree -I 'node_modules|.git|dist|.parcel-cache' -->
```
├── CHALLENGE.md
├── eslint.config.mjs
├── package.json
├── package-lock.json
├── public
│   ├── frames
│   │   ├── frame_00.json
│   │   ├── frame_**.json
│   └── index.html
├── README.md
├── scripts
│   └── get_frames.sh
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Box.tsx
│   │   ├── Point.tsx
│   │   └── Tooltip.tsx
│   ├── index.tsx
│   ├── style.css
│   ├── types.ts
│   └── utils.ts
└── tsconfig.json
```
  - ?: if the project grows it will need vertical or horizontal slice architecture (by module, or by layer)
  - IMPROVE: add tests

- [x] **Visualization**: Is the visualization effective, intuitive, and aesthetically pleasing?
  - IMPROVE: colors
  - IMPROVE: the application is not capable of render all the points, but it renders many of them.
  - IMPROVE: the timeline combobox is not good as I want. Use a Slider or something different


- [x] **Performance**: Does the app run smoothly, even with large datasets?
  - OK: working correctly for a huge points size
  - OK: working correctly for a normal cuboid size
  - IMPROVE: when the camera moves, it starts moving slowly.

- **Usability**: Is the application user-friendly and accessible?
  - OK: It is rendering things correctly
  - IMPROVE: colors are not good enough
  - IMPROVE: Navigation with CameraControls are not good, it is a mess
  - IMPROVE: add Keyboard control like [minecraft alternative](https://codesandbox.io/p/sandbox/vkgi6?file=%2Fsrc%2FApp.js)

### Refs

- eslint, prettier, husky, lint-staged:
  - https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b
  - https://dev.to/shashwatnautiyal/complete-guide-to-eslint-prettier-husky-and-lint-staged-fh9

- pandaset
  - reference: https://scaleapi.github.io/pandaset-devkit/annotations.html#pandaset.annotations.Cuboids.data
    ```
    - yaw: str
    Rotation of cuboid around the z-axis. Given in radians from which the cuboid is rotated along the z-axis. 
    0 radians is equivalent to the direction of the vector (0, 1, 0). The vector points at the length-side. 
    Rotation happens counter-clockwise, i.e., PI/2 is pointing in the same direction as the vector (-1, 0, 0)
    ```