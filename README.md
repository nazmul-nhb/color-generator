# Color Generator

**Color Generator** is a simple utility to generate hex color codes based on the first letter of string or number. It provides easy-to-use function that takes string, number, or array of numbers of strings/numbers as input and returns the corresponding hex color(s).

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
import { getColorForFirstLetter } from 'color-generator-fl';
```

### Function Overview

#### `getColorForFirstLetter(arg: string | number | (string | number)[]): string | string[]`

- The function returns a hex color based on the first letter of a string or number. If an array is provided, it returns an array of hex colors for each element.

### Example

#### Using with String

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const color = getColorForFirstLetter('Alice'); // '#132DEE' (Deep blue)
console.log(color);
```

#### Using with Number

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const color = getColorForFirstLetter(123); // '#E3C65D' (Golden rod)
console.log(color);
```

#### Using with Array

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const colors = getColorForFirstLetter(['Alice', 123, 'Bob']); 
// ['#132DEE', '#E3C65D', '#1E90FF'] (Deep blue, Golden rod, Dodger blue)
console.log(colors);
```

### Handling Invalid Input

- The function handles invalid characters (not alphabet or numbers) and empty input:

```ts
const color = getColorForFirstLetter('!@#'); // '🛑 Invalid Character!'
console.log(color);
```

### Color Palettes

This package uses two distinct color palettes:

- **Alphabet Color Palette**: A unique hex color for each alphabet letter (A-Z).
- **Number Color Palette**: A unique hex color for each digit (0-9).

## API

### `getColorForFirstLetter`

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
import { getColorForFirstLetter } from 'color-generator-fl';

const tags = ['Important', 'Urgent', 'Pending'];
const tagColors = getColorForFirstLetter(tags);

console.log(tagColors);
// ['#132DEE', '#8A2BE2', '#00CED1'] (Colors for 'Important', 'Urgent', 'Pending')
```

This approach ensures that tags can have consistent colors across the app, making the UI more user-friendly and intuitive.

### 2. Initials-Based Avatars

- For applications displaying user initials (such as team dashboards or comment sections), generate background colors based on the initials of the user's name.

Example:

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const userName = 'Sarah Connor';

const avatarColor = getColorForFirstLetter(userName);
console.log(avatarColor); // A consistent color for 'S'
```

This use case can be helpful in list-based UIs or grids where users are represented with initials instead of profile pictures.

### 3. Categorizing Projects or Items

- When managing a large number of projects or items (such as in a task management tool or project dashboard), you can use the first letter of each project or item to assign a unique color, improving the visual distinction between different elements.

Example:

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const projects = ['Alpha', 'Beta', 'Gamma'];
const projectColors = getColorForFirstLetter(projects);

console.log(projectColors);
// Colors for 'Alpha', 'Beta', 'Gamma' which can be applied to project cards or labels
```

### 4. Chat Message Bubbles

- In a chat application, you can assign colors to message bubbles based on the sender’s name. This can be used to distinguish between different users visually.

Example:

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const senderName = 'David';
const bubbleColor = getColorForFirstLetter(senderName);

console.log(bubbleColor); // Generates a consistent color for David's message bubble
```

### 5. Color-Coding Notifications

- When displaying notifications in a system, you can color-code them based on the type of notification. For example, system notifications could have one color, and user-related notifications another, based on the notification category.

Example:

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const notificationTypes = ['System Alert', 'Message', 'Reminder'];
const notificationColors = getColorForFirstLetter(notificationTypes);

console.log(notificationColors);
// Generates different colors for each type of notification
```

### 6. Color-Coding Product Categories

- If you have an e-commerce platform or any product listing system, you can dynamically generate colors for product categories based on the category name.

Example:

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const categories = ['Electronics', 'Clothing', 'Books'];
const categoryColors = getColorForFirstLetter(categories);

console.log(categoryColors);
// Colors for 'Electronics', 'Clothing', and 'Books' categories
```

### 7. Dynamic Charts and Graphs

- In data visualization, you can generate colors for different data series dynamically based on labels or identifiers.

Example:

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const labels = ['Sales', 'Revenue', 'Profit'];
const chartColors = getColorForFirstLetter(labels);

console.log(chartColors);
// Generates distinct colors for 'Sales', 'Revenue', and 'Profit' series in the chart
```

This ensures consistency and a visually pleasing look for charts that need distinct colors for different datasets.

### 8. File Management Systems

- In file management or file-sharing systems, you can assign colors to folders or files based on the first letter of the folder or file name.

Example:

```ts
import { getColorForFirstLetter } from 'color-generator-fl';

const folders = ['Annual Report', 'Budget', 'Client List'];
const folderColors = getColorForFirstLetter(folders);

console.log(folderColors);
// Generates distinct colors for each folder, making it easier to visually distinguish them
```

---

By leveraging the **Color Generator** package in these use cases, you can maintain a consistent and vibrant UI while adding a dynamic element to your application. There can be more use cases based on a particular situation.

## License

This project is licensed under the MIT License.

## Author

Created by [Nazmul Hassan](https://github.com/nazmul-nhb).
