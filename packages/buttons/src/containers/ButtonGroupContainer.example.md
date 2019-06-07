```jsx
const buttons = ['Button 1', 'Button 2', 'Button 3'];

<ButtonGroupContainer>
  {({ getGroupProps, getButtonProps, selectedKey, focusedKey }) => (
    <ButtonGroupView {...getGroupProps()}>
      {buttons.map(button => (
        <Button
          {...getButtonProps({
            key: button,
            selected: selectedKey === button,
            focused: focusedKey === button,
            focusInset: true
          })}
        >
          {button}
        </Button>
      ))}
    </ButtonGroupView>
  )}
</ButtonGroupContainer>;
```

```jsx
const buttons = [
  { title: 'Button 1' },
  { title: 'Disabled', disabled: true },
  { title: 'Button 3' }
];

<ButtonGroupContainer>
  {({ getGroupProps, getButtonProps, selectedKey, focusedKey }) => (
    <ButtonGroupView {...getGroupProps()}>
      {buttons.map(button => {
        if (button.disabled) {
          return (
            <Button disabled primary key={button.title}>
              {button.title}
            </Button>
          );
        }

        return (
          <Button
            {...getButtonProps({
              key: button.title,
              selected: selectedKey === button.title,
              focused: focusedKey === button.title,
              focusInset: true,
              primary: true
            })}
          >
            {button.title}
          </Button>
        );
      })}
    </ButtonGroupView>
  )}
</ButtonGroupContainer>;
```
