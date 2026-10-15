# DexMimic

Project page for **DexMimic: A Generalist Dexterous Hand–Object Tracking Policy via Value-Guided Reset Allocation**.

Zhexi Luo, Zhixuan Xu, Rui Yang, Zeyu Xiao, Yiwen Hou, Lin Shao<br>
National University of Singapore (NUS) · RoboScience

[Project page](https://zhexiluo.github.io/DexMimic/)

## Structure

- `index.html`: project page, results, videos, and interactive trajectory gallery.
- `static/css/` and `static/js/`: responsive layout and browser interactions.
- `static/assets/`: paper, appendix, figures, videos, and Three.js trajectory data.
- `static/assets/dexmimic-promo.mp4` and `dexmimic-promo.jpg`: narrated project video and poster, displayed between TL;DR and Pipeline with native playback controls.
- `static/assets/trajectories/shared/readme.md`: viewer architecture and data contract.

## Local preview

From the repository root, create an ignored preview mount matching the GitHub Pages subpath:

```sh
mkdir -p agent/preview
ln -sfn ../.. agent/preview/DexMimic
npx http-server agent/preview -p 8774 -a 127.0.0.1 -c-1
```

Open [the local preview](http://127.0.0.1:8774/DexMimic/). The server supports byte-range video requests. GitHub Pages uses the `main` branch and repository root; `.nojekyll` keeps static assets unchanged.

## Third-party assets

Keep the [Three.js license](static/assets/trajectories/shared/vendor/LICENSE) and [Wuji hand model license](static/assets/trajectories/shared/hands/license.txt) with redistributed assets. Appearance sources are recorded in `static/assets/trajectories/shared/appearance-provenance.json`.
