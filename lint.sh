#!/usr/bin/env bash
echo "Running Bazel lint"
bazel run //:check
echo
echo "Running Prettier and Java tests"
bazel test --test_tag_filters=lint //...
