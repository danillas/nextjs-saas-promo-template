const config = {
  plugins: [
    "@tailwindcss/postcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production"
      ? [
          [
            "cssnano",
            {
              preset: [
                "default",
                {
                  discardComments: {
                    removeAll: true,
                  },
                  mergeRules: true,
                  mergeLonghand: true,
                  cssDeclarationSorter: true,
                  uniqueSelectors: true,
                  minifySelectors: true,
                  normalizeWhitespace: true,
                },
              ],
            },
          ],
        ]
      : []),
  ],
}

export default config
