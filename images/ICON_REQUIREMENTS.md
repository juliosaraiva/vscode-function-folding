# Icon Requirements

Your extension needs an icon for the VS Code Marketplace. Here are the requirements:

## Icon Specifications

- **Size**: 128x128 pixels
- **Format**: PNG (recommended) or SVG
- **Background**: Can be transparent or solid color
- **Style**: Simple, clear, and recognizable at small sizes

## Design Suggestions

- Use a folding/collapsing symbol (like accordion lines)
- Incorporate JavaScript/TypeScript colors (yellow/blue)
- Keep it simple and professional
- Test how it looks at different sizes

## File Location

Save your icon as: `images/icon.png`

## Free Icon Resources

- [Feather Icons](https://feathericons.com/) - Minimalist icons
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [Tabler Icons](https://tabler-icons.io/) - Free SVG icons
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

## Icon Ideas

- Folding/accordion lines
- Code brackets with collapse indicator
- Function symbol with folding arrows
- Layers or stack with partial visibility

Once you have your icon, update the package.json to include:

```json
"icon": "images/icon.png"
```

## Alternative

If you don't have an icon ready, you can publish without one initially and add it in a later update. VS Code will use a default icon in the meantime.
