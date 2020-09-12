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

## License
GNU General Public License v3.0 or later
