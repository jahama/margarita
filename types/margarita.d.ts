export declare type Breakpoint = 'mobile' | 'tablet' | 'desktop'

export type Layout = {
  readonly currentBreakpoint: Breakpoint | null
  getResponsivePropValue: (_: Breakpoint | Breakpoint[]) => Breakpoint
}
