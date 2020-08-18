#!/bin/bash

function assert_node_installed() {
    command -v node > /dev/null 2>&1 || {
        echo >&2 "Nodejs is not installed. Aborting."
        exit 1
    }
}

function get_project_dir() {
    local script_name="$1"

    dir="$(dirname "$script_name")"
    if [[ "$dir" == "." ]]; then
        dir="$(pwd)"
    fi

    echo "$dir"
}

main() {
    local script_name="$0"

    assert_node_installed

    local dir
    dir="$(get_project_dir "$script_name")"

    cd "$dir" || exit 1
    node "./app.js" &
}

main
