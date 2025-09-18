mkdir abstracts base components layout pages themes vendors

# abstracts folder
cd abstracts
touch index.scss functions.scss mixins.scss variables.scss
cat > index.scss << EOF
@forward 'functions';
@forward 'mixins';
@forward 'variables';
EOF

# base folder
cd ..
cd base
touch index.scss reset.scss typography.scss
cat > index.scss << EOF
@forward 'reset';
@forward 'typography';
EOF

# components folder
cd ..
cd components
touch index.scss buttons.scss
cat > index.scss << EOF
@forward 'buttons';
EOF

# layout folder
cd ..
cd layout
touch index.scss navigation.scss grid.scss header.scss footer.scss sidebar.scss forms.scss 
cat > index.scss << EOF
@forward 'navigation';
@forward 'grid';
@forward 'header';
@forward 'footer';
@forward 'sidebar';
@forward 'forms';
EOF

#pages folder
cd ..
cd pages
touch index.scss home.scss contact.scss
cat > index.scss << EOF
@forward 'home';
@forward 'contact';
EOF

#themes folder
cd ..
cd themes
touch index.scss theme.scss admin.scss
cat > index.scss << EOF
@forward 'theme';
@forward 'admin';
EOF

#vendors folder
cd ..
cd vendors
touch index.scss bootstrap.scss
cat > index.scss << EOF
@forward 'bootstrap';
EOF

cd ..
cat > main.scss << EOF
@use 'abstracts' as *;         // Global access to variables/mixins
@use 'vendors' as vendors;     // Namespaced access
@use 'base' as base;
@use 'components' as comp;
@use 'layout' as layout;
@use 'pages' as pages;
@use 'themes' as themes;
EOF