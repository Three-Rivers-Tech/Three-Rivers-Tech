# Icon Component Library

This directory contains reusable icon components for the Three Rivers Tech website.

## Usage

### Using React Icons

The website uses React Icons library for professional, scalable icons. To use an icon:

```tsx
import { FaLaptopCode } from 'react-icons/fa';

// In your component
<Icon icon={FaLaptopCode} className="w-12 h-12 text-primary" />
```

### Available Icon Sets

- `Fa` - Font Awesome icons
- `Io` - Ionicons
- `Md` - Material Design icons
- `Ti` - Typicons
- `Go` - Github Octicons
- `Fi` - Feather icons
- `Gi` - Game icons
- `Wi` - Weather icons
- `Di` - Devicons
- `Ai` - Ant Design icons

### Custom SVG Icons

For custom SVG icons, create a component in this directory:

```tsx
// CustomIcon.tsx
export default function CustomIcon({ className = "w-12 h-12 text-primary" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <!-- SVG paths here -->
    </svg>
  );
}
```

Then use it with the Icon component:

```tsx
import CustomIcon from './CustomIcon';

// In your component
<Icon icon={CustomIcon} />
```

## Consistency Guidelines

- Use `w-12 h-12` for standard icons
- Use `text-primary` for primary color
- Maintain consistent spacing and padding around icons
- Ensure icons are accessible with proper contrast ratios
