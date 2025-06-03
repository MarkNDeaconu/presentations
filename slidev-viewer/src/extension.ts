import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Slidev Viewer extension activated');

  const disposable = vscode.commands.registerCommand('slidevViewer.open', () => {
    const panel = vscode.window.createWebviewPanel(
      'slidevViewer',
      'Slidev Viewer',
      vscode.ViewColumn.One,
      { enableScripts: true }
    );

    panel.webview.html = `
      <!DOCTYPE html>
      <html lang="en">
      <body style="margin:0;padding:0;height:100vh;">
        <iframe src="http://localhost:3030" style="width:100%;height:100%;border:none;"></iframe>
      </body>
      </html>`;
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}

