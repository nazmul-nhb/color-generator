# Color Generator

**Color Generator** is a simple utility to generate hex color codes based on the first character of a string or number. It provides an easy-to-use function that accepts a string, number, or an array of strings/numbers as input and returns the corresponding hex color(s). Additionally, the package allows you to specify an opacity level (0-100%) for the generated colors, providing flexibility for styling with transparent colors.

## Installation

- Install the package via npm:

```bash
npm install color-generator-fl
```

- Install the package via yarn:

```bash
yarn add color-generator-fl
```

## Usage

### Import the Package

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';
```

### Function Overview

#### `getColorForFirstCharacter(arg: string | number | (string | number)[]): string | string[]`

- The function returns a hex color based on the first character of a string or number. If an array is provided, it returns an array of hex colors for each element.

### Example

#### Using with String

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const color = getColorForFirstCharacter('Alice'); // '#132DEEFF' (Deep blue)
    console.log(color);

    const colorWithOpacity = getColorForFirstCharacter('Alice', 50); // '#132DEE80' (Deep blue with 50% opacity)
    console.log(colorWithOpacity);
```

#### Using with Number

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const color = getColorForFirstCharacter(666); // '#FF6347FF' (Tomato)
    console.log(color);

    const colorWithOpacity = getColorForFirstCharacter(666, 75); // '#FF6347BF' (Tomato with 75% opacity)
    console.log(colorWithOpacity);
```

#### Using with Array

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const colors = getColorForFirstCharacter(['Alice', 123, 'Bob']);
    // ['#132DEEFF', '#FFD700FF', '#1E90FFFF'] (Deep blue, Gold, Dodger blue)
    console.log(colors);

    const colorsWithOpacity = getColorForFirstCharacter(['Alice', 123, 'Bob'], 25);
    // ['#132DEE40', '#FFD70040', '#1E90FF40'] (Deep blue, Gold, Dodger blue with 25% opacity)
    console.log(colorsWithOpacity);
```

### Handling Invalid Character

- The function handles invalid characters (not alphabet or numbers or array of numbers/strings):

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const color = getColorForFirstCharacter('!@#'); // '🛑 Invalid Character!'
    console.log(color);
```

### Handling Invalid Input

- The function handles invalid input (objects or other types) and empty input:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const color = getColorForFirstCharacter({name: 'John Doe'}); // '🛑 Invalid Input!'
    console.log(color);
```

### Color Palettes

This package uses two distinct color palettes:

- **Alphabet Color Palette**: A unique hex color for each alphabet letter (A-Z).
- **Number Color Palette**: A unique hex color for each digit (0-9).

## API

### `getColorForFirstCharacter`

#### Parameters

- `arg: string | number | (string | number)[]`: A string, number, or array of strings and numbers.

#### Returns

- `string`: A single hex color code for a string or number input.
- `string[]`: An array of hex color codes for an array of strings and/or numbers.

## Real Life Usage

- Here are some real life use cases for your **Color Generator** package:

### 1. Tagging System Backgrounds

- In a tagging system, you can assign colors dynamically to different tags based on their names, ensuring each tag has a unique color.

Example:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const tags = ['Important', 'Urgent', 'Pending'];
    const tagColors = getColorForFirstCharacter(tags);

    console.log(tagColors);
    // ['#7FFF00FF', '#00FF00FF', '#87CEEBFF'] (Colors for 'Important', 'Urgent', 'Pending')
```

This approach ensures that tags can have consistent colors across the app, making the UI more user-friendly and intuitive.

### 2. Initials-Based Avatars

- For applications displaying user initials (such as team dashboards or comment sections), generate background colors based on the initials of the user's name.

Example:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const userName = 'Sarah Connor';

    const avatarColor = getColorForFirstCharacter(userName);
    console.log(avatarColor); // A consistent color for 'S'
```

This use case can be helpful in list-based UIs or grids where users are represented with initials instead of profile pictures.

### 3. Categorizing Projects or Items

- When managing a large number of projects or items (such as in a task management tool or project dashboard), you can use the first letter/character of each project or item to assign a unique color, improving the visual distinction between different elements.

Example:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const projects = ['Alpha', 'Beta', 'Gamma'];
    const projectColors = getColorForFirstCharacter(projects);

    console.log(projectColors);
// Colors for 'Alpha', 'Beta', 'Gamma' which can be applied to project cards or labels
```

### 4. Chat Message Bubbles

- In a chat application, you can assign colors to message bubbles based on the sender’s name. This can be used to distinguish between different users visually.

Example:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const senderName = 'David';
    const bubbleColor = getColorForFirstCharacter(senderName);

    console.log(bubbleColor); // Generates a consistent color for David's message bubble
```

### 5. Color-Coding Notifications

- When displaying notifications in a system, you can color-code them based on the type of notification. For example, system notifications could have one color, and user-related notifications another, based on the notification category.

Example:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const notificationTypes = ['System Alert', 'Message', 'Reminder'];
    const notificationColors = getColorForFirstCharacter(notificationTypes);

    console.log(notificationColors);
// Generates different colors for each type of notification
```

### 6. Color-Coding Product Categories

- If you have an e-commerce platform or any product listing system, you can dynamically generate colors for product categories based on the category name.

Example:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const categories = ['Electronics', 'Clothing', 'Books'];
    const categoryColors = getColorForFirstCharacter(categories);

    console.log(categoryColors);
// Colors for 'Electronics', 'Clothing', and 'Books' categories
```

### 7. Dynamic Charts and Graphs

- In data visualization, you can generate colors for different data series dynamically based on labels or identifiers.

Example:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const labels = ['Sales', 'Revenue', 'Profit'];
    const chartColors = getColorForFirstCharacter(labels);

    console.log(chartColors);
// Generates distinct colors for 'Sales', 'Revenue', and 'Profit' series in the chart
```

This ensures consistency and a visually pleasing look for charts that need distinct colors for different datasets.

### 8. File Management Systems

- In file management or file-sharing systems, you can assign colors to folders or files based on the first letter/character of the folder or file name.

Example:

```ts
    import { getColorForFirstCharacter } from 'color-generator-fl';

    const folders = ['Annual Report', 'Budget', 'Client List'];
    const folderColors = getColorForFirstCharacter(folders);

    console.log(folderColors);
// Generates distinct colors for each folder, making it easier to visually distinguish them
```

---

By leveraging the **Color Generator** package in these use cases, you can maintain a consistent and vibrant UI while adding a dynamic element to your application. There can be more use cases based on a particular situation.

## License

- This project is licensed under the MIT License.

## Author

- Created by [Nazmul Hassan](https://nazmul-nhb.vercel.app).
