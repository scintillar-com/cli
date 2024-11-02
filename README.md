# Scintillar CLI

Scintillar CLI allows you to quickly boot a new instance of the platform and start building your game.

## Prerequisites

- Node 18+

## Installation

1. Clone the repository: `git clone git@github.com:scintillar-com/cli.git`
2. Install dependencies: `npm i`

## Configuration

The CLI can be further configured with an environment file, mostly for development purposes;

1. Create an `.env` file at the root of the project
2. Add the relevant environment variables;

```text
    SCINTILLAR_CLI_DEBUG=true # Enable/Disable debug mode
```

## Running the CLI

Simply run `node index.js` or `npm start` on root directory.

## Features

- (Soon) Select which tools to enable
- (Soon) Select instance type (local or host)

## Troubleshooting

If you encounter issues, make sure to enable the debug environment and review logs under `/logs/`.

## Contributing

Contributions are welcome! Please submit pull requests or issues on GitHub.

## License

Scintillar CLI is released under the MIT License.