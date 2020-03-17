# Viral kindness cards

This is the source code to [www.viralkindness.cards](https://viralkindness.cards).

## Contribute a translation

### 1. Install Hugo

Hugo is a framework for building static sites. Read the [Getting Started Overview.](https://gohugo.io/getting-started/)

### 2. Add a language

In `./config.yml` append the section under `languages:` and translate the strings there.

### 2. Translate the index content

Copy `./content/_index.en.md` and translate it to your language.

### 3. Translate the card content

Copy `./content/card/v1.en.md` and translate it to your language.

### 4. Test your translation

Run a Hugo server to test the translation:

```shell script
$ hugo server
```

### 5. Submit a pull request

Submit a pull request to https://github.com/dickolsson/viralkindness
