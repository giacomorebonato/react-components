The `ButtonGroupView` component by itself is a simple, presentation component without any
selection logic. For real-world usages it should be used with
the `ButtonGroup` or `ButtonGroupContainer` components.

### Standard Button Group (no logic)

```jsx
const { ThemeProvider } = require('@zendeskgarden/react-theming/src');

<ButtonGroupView>
  <Button focusInset>Button 1</Button>
  <Button focusInset>Button 2</Button>
  <Button focusInset>Button 3</Button>
</ButtonGroupView>
<ButtonGroupView style={{marginTop: 20}}>
  <Button focusInset primary pill>Button 1</Button>
  <Button focusInset primary pill>Button 2</Button>
  <Button focusInset primary pill>Button 3</Button>
</ButtonGroupView>
```
