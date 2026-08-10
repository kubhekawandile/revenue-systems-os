$ErrorActionPreference = "Stop"

$repositoryRoot = Split-Path -Parent $PSScriptRoot
$cachePath = [System.IO.Path]::GetFullPath((Join-Path $repositoryRoot ".next"))
$expectedPath = [System.IO.Path]::GetFullPath((Join-Path $repositoryRoot ".next"))

if ($cachePath -ne $expectedPath -or -not $cachePath.StartsWith($repositoryRoot + [System.IO.Path]::DirectorySeparatorChar)) {
  throw "Refusing to remove an unexpected cache path: $cachePath"
}

if (Test-Path -LiteralPath $cachePath) {
  Remove-Item -LiteralPath $cachePath -Recurse -Force
}
