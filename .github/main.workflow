workflow "CI" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "actions/npm@c555744"
  args = "install"
}

action "Test" {
  uses = "actions/npm@c555744"
  needs = ["Install"]
  args = "run test:unit"
}

action "Build" {
  uses = "actions/npm@c555744"
  needs = ["Test"]
  args = "run build"
}
