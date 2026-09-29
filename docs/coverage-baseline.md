# Coverage Baseline

Measured 2026-09-29 with `npm run test:coverage`. Coverage is scoped to
`src/**/*.ts` and `packages/*/src/**/*.ts`; `contrib/`, integration tests, and
load tests are excluded.

| Metric | Baseline |
| --- | ---: |
| Statements | 56.90% |
| Branches | 88.53% |
| Functions | 79.75% |
| Lines | 56.90% |

Vitest emitted this report with `coverage.reportOnFailure` enabled. At
measurement time, 456 tests passed and two suites failed during transform:
`src/session.test.ts` has an unexpected end of file, and
`src/x402-signer.test.ts` uses `await` outside an async function. Treat this as
an initial, qualified baseline until those suites can run. No coverage threshold
is set; thresholds should be discussed after the suite is healthy and the
baseline is reviewed.