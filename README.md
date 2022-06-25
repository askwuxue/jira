git commit 格式
`git commit -m type<optional scope>: description`

`type` ：用于表明我们这次提交的改动类型

- `build`：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交

- `ci`：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交

- `docs`：文档更新
- `feat`：新增功能
- `fix`：bug 修复
- `perf`：性能优化
- `refactor`：重构代码(既没有新增功能，也没有修复 bug)
- `style`：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
- `test`：新增测试用例或是更新现有测试
- `revert`：回滚某个更早之前的提交
- `chore`：不属于以上类型的其他类型(日常事务)

`optional scope`：一个可选的修改范围。用于标识此次提交,主要涉及到代码中哪个模块。
`description`：描述此次提交的内容信息
