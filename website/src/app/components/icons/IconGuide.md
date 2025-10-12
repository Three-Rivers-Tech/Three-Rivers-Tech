# Three Rivers Tech Icon System

## Overview

This document explains the icon system implemented for the Three Rivers Tech website. We've replaced emoji-based icons with professional SVG icons using the React Icons library and custom SVG components.

## Benefits of the New Icon System

1. **Professional Appearance**: SVG icons look crisp at any resolution
2. **Consistent Styling**: All icons follow the same color and sizing scheme
3. **Accessibility**: Properly labeled icons for screen readers
4. **Performance**: Lightweight SVG icons that load quickly
5. **Flexibility**: Easy to customize colors, sizes, and animations

## Icon Libraries Used

### React Icons
We use React Icons (https://react-icons.github.io/react-icons/) which provides icons from popular icon sets:
- Font Awesome (Fa)
- Material Design (Md)
- Feather Icons (Fi)
- And many others

### Custom SVG Icons
For unique icons that match our brand, we've created custom SVG components.

## Implementation Details

### Component Structure
1. **ServiceCard/FeatureCard**: Accept React components as icons instead of strings
2. **Icon Wrapper**: A reusable component that ensures consistent styling
3. **Icon Index**: Centralized import system for easy usage

### Usage Examples

#### Using React Icons
```tsx
import { FaLaptopCode } from 'react-icons/fa';

// In component
<FaLaptopCode className="w-12 h-12 text-primary" />
```

#### Using Custom Icons
```tsx
import SoftwareDevelopmentIcon from './icons/SoftwareDevelopmentIcon';

// In component
<SoftwareDevelopmentIcon className="w-12 h-12 text-primary" />
```

#### Using the Icon Wrapper
```tsx
import { Icon } from './icons';
import { FaSearch } from 'react-icons/fa';

// In component
<Icon icon={FaSearch} className="w-12 h-12 text-primary" />
```

## Consistency Guidelines

1. **Size**: Use `w-12 h-12` for standard icons
2. **Color**: Use `text-primary` for primary color scheme
3. **Spacing**: Maintain consistent padding/margin around icons
4. **Accessibility**: Add aria-labels when icons convey meaning

## Adding New Icons

1. For standard icons, use React Icons library
2. For custom icons, create a new component in the icons directory
3. Export new icons in the index.ts file
4. Update components to use the new icons

## Migration from Emojis

We've successfully migrated from emoji-based icons to SVG icons in:
- Services component
- Features component
- WhyChooseUs component (SVG sizing updated)

This provides a more professional and consistent user experience across all browsers and devices.
