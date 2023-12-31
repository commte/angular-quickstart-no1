// Angular/angular-quickstart-no1/src/app/my-component/my-component.component.ts
import { Component, OnInit } from '@angular/core'; // AngularのコアライブラリからComponentとOnInitをインポート

@Component({
  // 特定のクラスがAngularコンポーネントであることをフレームワークに伝えます
  selector: 'app-my-component', // コンポーネントのセレクター名を定義。HTMLで <app-my-component> として使用
  standalone: true, // スタンドアロンコンポーネントを示す。独立して存在し、他のモジュールに含まれない
  templateUrl: './my-component.component.html', // コンポーネントのテンプレートファイルのパス
  styleUrls: ['./my-component.component.scss'], // コンポーネントのスタイルファイルのパス
})
export class MyComponentComponent implements OnInit {
  // MyComponentComponentクラスの定義。OnInitインターフェースを実装
  constructor() {} // コンストラクタ。コンポーネントの初期化時に呼ばれる

  ngOnInit(): void {} // ngOnInitメソッド。コンポーネントの初期化時に呼ばれるライフサイクルフック
}
