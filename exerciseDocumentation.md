## Goal: Add documentation for each exercise to this file so we can write them more easily

#### GraphExercise

Need to inport `LineStyles` and `GraphExercise` to use

```angular2html
        <GraphExercise
          origin={{ x: 0, y: 0 }}
          points={[
            { x: -1, y: 1, label: 'A' },
            { x: 2, y: -1, label: 'B', line: LineStyles.Dashed },
            { x: 1, y: 0, label: 'C', line: LineStyles.Solid },
            { x: 0, y: -2, label: 'D', line: LineStyles.Solid },
          ]}
          pointerPosition={{ x: 1, y: 1 }}
          pointerOrientation={45}
        />
```
