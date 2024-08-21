import withTM from "next-transpile-modules";

const withTranspileModules = withTM(["three"]);

/** @type {import('next').NextConfig} */
const nextConfig = withTranspileModules({
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(glsl|vs|fs)$/,
        loader: "webpack-glsl-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["tailwindcss", "autoprefixer"],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "static/fonts/[hash][ext][query]",
        },
      }
    );
    return config;
  },
});

export default nextConfig;
