import React from 'react'
import { Grid, Pagination } from 'semantic-ui-react'

interface Props {
  activePage: number
  totalPage: number
  onPageChange(e, { activePage }): void
}

const AppPagination: React.FC<Props> = ({
  activePage,
  totalPage,
  onPageChange,
}) => (
  <Grid columns={1}>
    <Grid.Column>
      <Pagination
        floated="right"
        activePage={activePage}
        boundaryRange={1}
        onPageChange={onPageChange}
        size="mini"
        siblingRange={1}
        totalPages={totalPage}
      />
    </Grid.Column>
  </Grid>
)

export default AppPagination
