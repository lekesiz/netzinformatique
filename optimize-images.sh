#!/bin/bash

# Script d'optimisation des images
echo "🖼️  Optimisation des images en cours..."

# Créer un dossier de backup
mkdir -p public/images/backup
cp -r public/images/blog public/images/backup/

# Optimiser les images JPG (réduire la qualité à 85%, redimensionner si > 1200px de largeur)
echo "📸 Optimisation des JPG..."
find public/images/blog -name "*.jpg" -type f | while read img; do
    echo "  - $(basename "$img")"
    convert "$img" -resize '1200>' -quality 85 -strip "$img"
done

# Créer des versions WebP
echo "🌐 Création des versions WebP..."
find public/images/blog -name "*.jpg" -type f | while read img; do
    webp_file="${img%.jpg}.webp"
    echo "  - $(basename "$webp_file")"
    cwebp -q 85 "$img" -o "$webp_file" 2>/dev/null
done

echo "✅ Optimisation terminée!"
echo ""
echo "📊 Tailles avant/après:"
du -sh public/images/backup/blog
du -sh public/images/blog
