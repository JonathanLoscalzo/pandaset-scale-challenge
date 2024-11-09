# 3D Scene Visualization Challenge

Welcome to our technical challenge! In this exercise, you are tasked to create a 3D visualization tool using the dependencies provided in the `package.json`. Your application will render a 3D scene given a JSON input containing information about points and cuboids.

### Provided Files

- `package.json`: Contains the dependencies that should be used to build the application.
- `https://static.scale.com/uploads/pandaset-challenge/frame_00.json`: Contains the data of a 3D scene with points and cuboids.

### Requirements

#### General

- Develop a full-screen 3D application.
- Use all dependencies listed in the `package.json`.
- Fetch and render points and cuboids from the provided `frame_00.json`.
- Implement camera controls (pan, zoom, and rotate) to navigate through the 3D scene.

#### Points

- Each point should be rendered in the 3D space according to its coordinates.
- The color of the points should be determined by their height (Z-coordinate). You may choose a color gradient or a set of predefined colors to map against various height ranges.

#### Cuboids

- Render each cuboid according to its position, rotation and dimensions in the 3D space.
- Cuboid faces should be semi-transparent.
- Edges/lines of the cuboids should be solid and well defined.
- Show extra relevant cuboid information on hover (using tooltips or a side panel).

### Bonus

- Develop an interactive timeline that allows users to navigate through the various frames of the scene. This timeline should provide a visual indication of the current frame’s position within the entire scene and facilitate effortless exploration through all available frames. Incorporate shortcuts or controls enabling users to seamlessly transition between adjacent frames, ensuring an intuitive user experience. A total of 50 frames are available in the provided bucket for exploration and integration into the viewer.

### Evaluation Criteria

- **Functionality**: Does the application fulfill the primary requirements?
- **Code Quality**: Is the code well-organized, easy to read, and follows best practices?
- **Visualization**: Is the visualization effective, intuitive, and aesthetically pleasing?
- **Performance**: Does the app run smoothly, even with large datasets?
- **Usability**: Is the application user-friendly and accessible?

### Use of External Resources

- Candidates are permitted to use Google, consult official documentation, or seek assistance from AI models like ChatGPT during the challenge.
- While leveraging external resources is allowed, candidates are expected to navigate through the challenge primarily with their knowledge and skills.
- If external resources were consulted for specific solutions, problem-solving, or coding implementations during the challenge, candidates are required to explicitly mention these instances.
