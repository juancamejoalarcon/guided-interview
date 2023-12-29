# Guided Interview

An interview consists of a series of questions arranged in any way. For example:

```json
{
    "name": {
        "id": "name",
        "type": "text",
        "title": "What is your name?",
    },
    "age": {
        "id": "age",
        "type": "number",
        "title": "How old are you?",
    },
    "licence": {
        "id": "licence",
        "type": "text",
        "title": "Write your driver’s licence number",
        "logic": {
            "showIf": "age.value >= 18"
        }
    }
}
```

The answers to these questions are saved in variables that can be used in subsequent questions.

You can use these results saved in variables to not show some questions.

### Publish package

Build library
```
npm run build
```

Run this command in terminal
```
np
```