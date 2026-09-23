// Zips out/ into it-rehub-site.zip with forward-slash paths (safe to unpack on Linux hosting).
// Windows: the built-in bsdtar writes real zips (Git Bash's GNU tar and Compress-Archive do not).
import { execFileSync } from "node:child_process";
import { rmSync } from "node:fs";
import { join } from "node:path";

const archive = "it-rehub-site.zip";
rmSync(archive, { force: true });

if (process.platform === "win32") {
  const tar = join(process.env.SystemRoot ?? "C:\Windows", "System32", "tar.exe");
  execFileSync(tar, ["-a", "-c", "-f", archive, "-C", "out", "."], { stdio: "inherit" });
} else {
  execFileSync("zip", ["-qr", `../${archive}`, "."], { cwd: "out", stdio: "inherit" });
}

console.log(`Created ${archive}`);
