# Firefox Profile Startpage
Displays firefox profiles to launch

## Usage
In project directory run:
```
npm install
```

When renaming a profile, update index.html:
```
onclick="launch('new-name')"
...
<text>new-display-name</text>
```

When adding a new profile, append to index.html:
```
<div class="sectionRow">
    <div class="profilePanel">
    ...
    </div>
</div>
```

For adding to (linux) application menu:
```
ln firefox-profile-startpage.desktop ~/.local/share/applications/
```

## Tasks
- Directly read from profile.ini (preserving order) [dynamic]
  Add some dummy profiles for the headers

- Provide api to update profile.ini

- Drag and drop profiles within a section

- Drag and drop profiles between sections

- Drag and drop sections

- Add profile [dynamic]
  Filter unused created profiles [phase 1]
  Allow selection of icon [dynamic storage]

- Add section [dynamic]

- Add Search bar (at the top)
  Filters all links within each profile
  Displays a list of profiles, and links below them

