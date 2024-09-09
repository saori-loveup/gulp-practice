// gulpプラグインの読み込み
const { src, dest, watch } = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));

/**
 * Sassをコンパイルするタスクの定義
 */
const compileSass = () =>
  // style.scssファイルを取得
  src("css/style.scss")
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded"
      })
    )
    // cssフォルダー以下に保存
    .pipe(dest("css"));

/**
 * Sassファイルを監視し、変更があったらSassを変換します
 */
const watchSassFiles = () => watch("css/style.scss", compileSass);

// npx gulpというコマンドを実行した時(タスク名がdefault)、watchSassFilesが実行されるようにする
exports.default = watchSassFiles;