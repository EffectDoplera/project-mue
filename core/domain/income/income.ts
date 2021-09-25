import { BaseDomain } from "core/domain/common/baseDomain";

export interface Income extends BaseDomain {
  readonly id: string
  readonly name: string
  readonly value: string
  readonly currency: string
  readonly date: Date
  readonly category: string
}
