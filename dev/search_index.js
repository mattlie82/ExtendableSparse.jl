var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#Types-and-Constants","page":"API","title":"Types and Constants","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [ExtendableSparse]\nPages = [\"sparsematrixlnk.jl\",\"extendable.jl\"]\nOrder = [:type]","category":"page"},{"location":"api/#ExtendableSparse.SparseMatrixLNK","page":"API","title":"ExtendableSparse.SparseMatrixLNK","text":"mutable struct SparseMatrixLNK{Tv, Ti<:Integer} <: SparseArrays.AbstractSparseArray{Tv,Ti<:Integer,2}\n\nStruct to hold sparse matrix in the linked list format.\n\nModeled after the linked list sparse matrix format described in  the  whitepaper and the  SPARSEKIT2 source code by Y. Saad. He writes \"This is one of the oldest data structures used for sparse matrix computations.\"\n\nThe relevant source formats.f is also available in the debian/science gitlab.\n\nProbably this format was around already in SPARSPAK by E.Chu, A.George and J.Liu, however this is  hard to verify, as it indeed appears that the source code of SPARSPAK vanished from the internet.\n\nThe advantage of the linked list structure is the fact that upon insertion of a new entry, the arrays describing the structure grow at their respective ends and can be conveniently updated via push!.  No copying of existing data is necessary.\n\nm::Integer\nNumber of rows\n\nn::Integer\nNumber of columns\n\nnnz::Integer\nNumber of nonzeros\n\nnentries::Integer\nLength of arrays\n\ncolptr::Array{Ti,1} where Ti<:Integer\nLinked list of column entries. Initial length is n, it grows with each new entry.\ncolptr[index] contains the next index in the list or zero, in the later case terminating the list which starts at index 1<=j<=n for each column j.\n\nrowval::Array{Ti,1} where Ti<:Integer\nRow numbers. For each index it contains the zero (initial state) or the row numbers corresponding to the column entry list in colptr.\nInitial length is n, it grows with each new entry.\n\nnzval::Array{Tv,1} where Tv\nNonzero entry values correspondin to each pair (colptr[index],rowval[index])\nInitial length is n,  it grows with each new entry.\n\n\n\n\n\n","category":"type"},{"location":"api/#ExtendableSparse.SparseMatrixLNK-Union{Tuple{SparseArrays.SparseMatrixCSC{Tv,Ti}}, Tuple{Ti}, Tuple{Tv}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.SparseMatrixLNK","text":"Constructor from SparseMatrixCSC.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.SparseMatrixLNK-Union{Tuple{Ti}, Tuple{Tv}, Tuple{Integer,Integer}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.SparseMatrixLNK","text":"SparseMatrixLNK(m, n)\n\n\nConstructor of empty matrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.SparseMatrixLNK-Union{Tuple{Ti}, Tuple{Tv}, Tuple{Type{Tv},Type{Ti},Integer,Integer}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.SparseMatrixLNK","text":"SparseMatrixLNK(valuetype, indextype, m, n)\n\n\nConstructor of empty matrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.SparseMatrixLNK-Union{Tuple{Tv}, Tuple{Integer,Integer}} where Tv","page":"API","title":"ExtendableSparse.SparseMatrixLNK","text":"SparseMatrixLNK(m, n)\n\n\nConstructor of empty matrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.SparseMatrixLNK-Union{Tuple{Tv}, Tuple{Type{Tv},Integer,Integer}} where Tv","page":"API","title":"ExtendableSparse.SparseMatrixLNK","text":"SparseMatrixLNK(valuetype, m, n)\n\n\nConstructor of empty matrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#SparseArrays.SparseMatrixCSC-Union{Tuple{SparseMatrixLNK{Tv,Ti}}, Tuple{Ti}, Tuple{Tv}} where Ti<:Integer where Tv","page":"API","title":"SparseArrays.SparseMatrixCSC","text":"Constructor from SparseMatrixCSC.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.ExtendableSparseMatrix","page":"API","title":"ExtendableSparse.ExtendableSparseMatrix","text":"mutable struct ExtendableSparseMatrix{Tv, Ti<:Integer} <: SparseArrays.AbstractSparseArray{Tv,Ti<:Integer,2}\n\nExtendable sparse matrix. A nonzero  entry of this matrix is contained either in cscmatrix, or in lnkmatrix, never in both.\n\ncscmatrix::SparseArrays.SparseMatrixCSC{Tv,Ti} where Ti<:Integer where Tv\nFinal matrix data\n\nlnkmatrix::Union{Nothing, SparseMatrixLNK{Tv,Ti}} where Ti<:Integer where Tv\nLinked list structure holding data of extension\n\npattern_timestamp::Float64\nTime stamp of last pattern update\n\n\n\n\n\n","category":"type"},{"location":"api/#ExtendableSparse.ExtendableSparseMatrix-Tuple{Integer,Integer}","page":"API","title":"ExtendableSparse.ExtendableSparseMatrix","text":"ExtendableSparseMatrix(m, n)\n\n\nCreate empty ExtendableSparseMatrix. This is a pendant to spzeros.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.ExtendableSparseMatrix-Union{Tuple{SparseArrays.SparseMatrixCSC{Tv,Ti}}, Tuple{Ti}, Tuple{Tv}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.ExtendableSparseMatrix","text":"Create ExtendableSparseMatrix from SparseMatrixCSC\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.ExtendableSparseMatrix-Union{Tuple{Ti}, Tuple{Tv}, Tuple{Integer,Integer}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.ExtendableSparseMatrix","text":"ExtendableSparseMatrix(m, n)\n\n\nCreate empty ExtendableSparseMatrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.ExtendableSparseMatrix-Union{Tuple{Ti}, Tuple{Tv}, Tuple{Type{Tv},Type{Ti},Integer,Integer}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.ExtendableSparseMatrix","text":"Create empty ExtendableSparseMatrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.ExtendableSparseMatrix-Union{Tuple{Tv}, Tuple{Type{Tv},Integer,Integer}} where Tv","page":"API","title":"ExtendableSparse.ExtendableSparseMatrix","text":"Create empty ExtendablSparseMatrix. This is a pendant to spzeros.\n\n\n\n\n\n","category":"method"},{"location":"api/","page":"API","title":"API","text":"Modules = [ExtendableSparse]\nPages = [\"sparsematrixlnk.jl\",\"extendable.jl\"]\nOrder = [:constant]","category":"page"},{"location":"api/#Methods","page":"API","title":"Methods","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [ExtendableSparse]\nPages = [\"sparsematrixlnk.jl\",\"extendable.jl\", \"sprand.jl\"]\nOrder = [:function]","category":"page"},{"location":"api/#Base.:+-Union{Tuple{Ti}, Tuple{Tv}, Tuple{SparseMatrixLNK{Tv,Ti},SparseArrays.SparseMatrixCSC{Tv,Ti}}} where Ti<:Integer where Tv","page":"API","title":"Base.:+","text":"+(lnk, csc)\n\n\nAdd SparseMatrixCSC matrix and SparseMatrixLNK  lnk, returning a SparseMatrixCSC\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.getindex-Union{Tuple{Ti}, Tuple{Tv}, Tuple{SparseMatrixLNK{Tv,Ti},Integer,Integer}} where Ti<:Integer where Tv","page":"API","title":"Base.getindex","text":"getindex(lnk, i, j)\n\n\nReturn value stored for entry or zero if not found\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.setindex!-Union{Tuple{Ti}, Tuple{Tv}, Tuple{SparseMatrixLNK{Tv,Ti},Any,Integer,Integer}} where Ti<:Integer where Tv","page":"API","title":"Base.setindex!","text":"setindex!(lnk, _v, _i, _j)\n\n\nUpdate value of existing entry, otherwise extend matrix if _v is nonzero.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.size-Tuple{SparseMatrixLNK}","page":"API","title":"Base.size","text":"size(lnk)\n\n\nReturn tuple containing size of the matrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.flush!-Union{Tuple{SparseMatrixLNK{Tv,Ti}}, Tuple{Ti}, Tuple{Tv}} where Ti where Tv","page":"API","title":"ExtendableSparse.flush!","text":"Dummy flush! method for SparseMatrixLNK. Just used in test methods\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.updateindex!-Union{Tuple{Ti}, Tuple{Tv}, Tuple{SparseMatrixLNK{Tv,Ti},Any,Any,Integer,Integer}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.updateindex!","text":"updateindex!(lnk, op, _v, _i, _j)\n\n\nUpdate element of the matrix  with operation op.  It assumes that op(0,0)==0 \n\n\n\n\n\n","category":"method"},{"location":"api/#SparseArrays.nnz-Tuple{SparseMatrixLNK}","page":"API","title":"SparseArrays.nnz","text":"nnz(lnk)\n\n\nReturn number of nonzero entries.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.:+-Union{Tuple{Ti}, Tuple{Tv}, Tuple{ExtendableSparseMatrix{Tv,Ti},SparseArrays.SparseMatrixCSC{Tv,Ti}}} where Ti<:Integer where Tv","page":"API","title":"Base.:+","text":"Add SparseMatrixCSC matrix and ExtendableSparseMatrix  ext.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.:--Union{Tuple{Ti}, Tuple{Tv}, Tuple{ExtendableSparseMatrix{Tv,Ti},SparseArrays.SparseMatrixCSC{Tv,Ti}}} where Ti<:Integer where Tv","page":"API","title":"Base.:-","text":"-(ext, csc)\n\n\nSubtract  SparseMatrixCSC matrix from  ExtendableSparseMatrix  ext.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.:--Union{Tuple{Ti}, Tuple{Tv}, Tuple{SparseArrays.SparseMatrixCSC{Tv,Ti},ExtendableSparseMatrix{Tv,Ti}}} where Ti<:Integer where Tv","page":"API","title":"Base.:-","text":"-(csc, ext)\n\n\nSubtract  ExtendableSparseMatrix  ext from  SparseMatrixCSC.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.:\\-Tuple{ExtendableSparseMatrix,Union{AbstractArray{T,1}, AbstractArray{T,2}} where T}","page":"API","title":"Base.:\\","text":"\\(ext, X)\n\n\n\\ for extmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.getindex-Union{Tuple{Ti}, Tuple{Tv}, Tuple{ExtendableSparseMatrix{Tv,Ti},Integer,Integer}} where Ti<:Integer where Tv","page":"API","title":"Base.getindex","text":"getindex(ext, i, j)\n\n\nFind index in CSC matrix and return value, if it exists. Otherwise, return value from extension.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.size-Tuple{ExtendableSparseMatrix}","page":"API","title":"Base.size","text":"size(ext)\n\n\nSize of ExtendableSparseMatrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.colptrs-Tuple{ExtendableSparseMatrix}","page":"API","title":"ExtendableSparse.colptrs","text":"colptrs(ext)\n\n\nflush! and return colptr of  in ext.cscmatrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.flush!-Union{Tuple{ExtendableSparseMatrix{Tv,Ti}}, Tuple{Ti}, Tuple{Tv}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.flush!","text":"If there are new entries in extension, create new CSC matrix by adding the cscmatrix and linked list matrix and reset the linked list based extension.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.updateindex!-Union{Tuple{Ti}, Tuple{Tv}, Tuple{ExtendableSparseMatrix{Tv,Ti},Any,Any,Any,Any}} where Ti<:Integer where Tv","page":"API","title":"ExtendableSparse.updateindex!","text":"updateindex!(ext, op, v, i, j)\n\n\nUpdate element of the matrix  with operation op.  This can replace the following code and save one index search during acces:\n\nusing ExtendableSparse # hide\nA=ExtendableSparseMatrix(3,3)\nA[1,2]+=0.1\nA\n\nusing ExtendableSparse # hide\n\nA=ExtendableSparseMatrix(3,3)\nupdateindex!(A,+,0.1,1,2)\nA\n\n\n\n\n\n","category":"method"},{"location":"api/#LinearAlgebra.cond","page":"API","title":"LinearAlgebra.cond","text":"cond(A)\ncond(A, p)\n\n\nflush! and calculate cond from cscmatrix\n\n\n\n\n\n","category":"function"},{"location":"api/#LinearAlgebra.ldiv!-Tuple{AbstractArray{T,1} where T,ExtendableSparseMatrix,AbstractArray{T,1} where T}","page":"API","title":"LinearAlgebra.ldiv!","text":"ldiv!(r, ext, x)\n\n\nflush! and ldiv with ext.cscmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#LinearAlgebra.ldiv!-Tuple{AbstractArray{T,2} where T,ExtendableSparseMatrix,AbstractArray{T,2} where T}","page":"API","title":"LinearAlgebra.ldiv!","text":"ldiv!(r, ext, x)\n\n\nflush! and ldiv with ext.cscmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#LinearAlgebra.lu-Tuple{ExtendableSparseMatrix}","page":"API","title":"LinearAlgebra.lu","text":"lu(ext)\n\n\nflush! and return LU factorization of ext.cscmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#LinearAlgebra.mul!-Tuple{AbstractArray{T,1} where T,ExtendableSparseMatrix,AbstractArray{T,1} where T}","page":"API","title":"LinearAlgebra.mul!","text":"mul!(r, ext, x)\n\n\nflush! and multiply with ext.cscmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#LinearAlgebra.mul!-Tuple{AbstractArray{T,2} where T,ExtendableSparseMatrix,AbstractArray{T,2} where T}","page":"API","title":"LinearAlgebra.mul!","text":"mul!(r, ext, x)\n\n\nflush! and multiply with ext.cscmatrix\n\n\n\n\n\n","category":"method"},{"location":"api/#LinearAlgebra.norm","page":"API","title":"LinearAlgebra.norm","text":"norm(A)\nnorm(A, p)\n\n\nflush! and calculate norm from cscmatrix\n\n\n\n\n\n","category":"function"},{"location":"api/#LinearAlgebra.opnorm","page":"API","title":"LinearAlgebra.opnorm","text":"opnorm(A)\nopnorm(A, p)\n\n\nflush! and calculate opnorm from cscmatrix\n\n\n\n\n\n","category":"function"},{"location":"api/#SparseArrays.findnz-Tuple{ExtendableSparseMatrix}","page":"API","title":"SparseArrays.findnz","text":"findnz(ext)\n\n\nflush! and return findnz(ext.cscmatrix).\n\n\n\n\n\n","category":"method"},{"location":"api/#SparseArrays.nnz-Tuple{ExtendableSparseMatrix}","page":"API","title":"SparseArrays.nnz","text":"nnz(ext)\n\n\nflush! and return number of nonzeros in ext.cscmatrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#SparseArrays.nonzeros-Tuple{ExtendableSparseMatrix}","page":"API","title":"SparseArrays.nonzeros","text":"nonzeros(ext)\n\n\nflush! and return nonzeros in ext.cscmatrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#SparseArrays.rowvals-Tuple{ExtendableSparseMatrix}","page":"API","title":"SparseArrays.rowvals","text":"rowvals(ext)\n\n\nflush! and return rowvals in ext.cscmatrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.fdrand!-Tuple{AbstractArray{T,2} where T,Any,Any,Any}","page":"API","title":"ExtendableSparse.fdrand!","text":"fdrand!(A, nx, ny, nz; update, rand)\n\n\nAfter setting  all nonzero entries  to zero, fill resp.  update matrix with finite  difference discretization data  on a unit  hypercube. See fdrand for documentation of the parameters.\n\nIt is required that size(A)==(N,N) where N=nx*ny*nz\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.fdrand-Union{Tuple{Tv}, Tuple{Any,Any,Any}} where Tv","page":"API","title":"ExtendableSparse.fdrand","text":"fdrand(nx, ny, nz; matrixtype, update, rand)\n\n\nCreate matrix  for a mock  finite difference operator for  a diffusion problem with random coefficients on a unit hypercube Omegasubsetmathbb R^d. with d=1 if  nx>1 && ny==1 && nz==1, d=2 if  nx>1 && ny>1 && nz==1 and d=3 if  nx>1 && ny>1 && nz>1 .\n\n    beginalign*\n             -nabla a nabla u = f  textin  Omega  \n    anabla ucdot vec n + bu =g  texton  partialOmega\n    endalign*\n\nThe matrix is irreducibly diagonally dominant, has positive main diagonal entries  and nonpositive off-diagonal entries, hence it has the M-Property. Therefore, its inverse will be a dense matrix with positive entries.  Moreover it is symmmetric, and  positive definite.\n\nParameters+ default values:\n\nParameter + default vale Description\nnx Number of unknowns in x direction\nny Number of unknowns in y direction\nnz Number of unknowns in z direction\nmatrixtype = SparseMatrixCSC Matrix type\nupdate = (A,v,i,j)-> A[i,j]+=v Element update function\nrand =()-> rand() Random number generator\n\nThe sparsity structure is fixed to an orthogonal grid, resulting in a 3, 5 or 7 diagonal matrix depending on dimension. The entries are random unless e.g.  rand=()->1 is passed as random number generator. Tested for Matrix, SparseMatrixCSC and ExtendableSparseMatrix.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.sprand!-Union{Tuple{Ti}, Tuple{Tv}, Tuple{SparseArrays.AbstractSparseArray{Tv,Ti,2},Int64}} where Ti where Tv","page":"API","title":"ExtendableSparse.sprand!","text":"sprand!(A, xnnz)\n\n\nFill empty sparse matrix A with random nonzero elements from interval [1,2] using incremental assembly.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExtendableSparse.sprand_sdd!-Union{Tuple{SparseArrays.AbstractSparseArray{Tv,Ti,2}}, Tuple{Ti}, Tuple{Tv}} where Ti where Tv","page":"API","title":"ExtendableSparse.sprand_sdd!","text":"Fill sparse matrix  with random entries such that  it becomes strictly diagonally  dominant  and  thus  invertible and  has  a  fixed  number nnzrow (default: 4) of nonzeros in its rows. The matrix bandwidth is bounded by  sqrt(n) in order to resemble  a typical matrix of  a 2D piecewise linear FEM discretization.\n\n\n\n\n\n","category":"method"},{"location":"changes/#Changes","page":"Changes","title":"Changes","text":"","category":"section"},{"location":"changes/#v0.3.0,-April-10,-2020","page":"Changes","title":"v0.3.0, April 10, 2020","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"Don't create new entry if the value to be assigned is zero, making things consistent with SparseMatrixCSC and ForwardDiff  as suggested by @MaximilianJHuber","category":"page"},{"location":"changes/#v0.2.5,-Jan-26,-2020","page":"Changes","title":"v0.2.5, Jan 26, 2020","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"fixed allocations in  Base.+\nadded updateindex! method \nprovide fdrand and fdrand! matrix constructors\nautomatic benchmarks in examples","category":"page"},{"location":"changes/#v0.2.4,-Jan-19,-2020","page":"Changes","title":"v0.2.4, Jan 19, 2020","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"Allow preconditioner creation directly from CSC Matrix\nRename AbstractPreconditioner to AbstractExtendablePreconditioner","category":"page"},{"location":"changes/#v0.2.3,-Jan-15,-2020","page":"Changes","title":"v0.2.3, Jan 15, 2020","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"Started to introduce preconditioners (undocumented)","category":"page"},{"location":"changes/#v0.2.3,-Jan-8,-2020","page":"Changes","title":"v0.2.3, Jan 8, 2020","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"added norm, cond, opnorm methods\nresize! instead of push! when adding entries should trigger less allocation operations","category":"page"},{"location":"changes/#v0.2.2.-Dec-23,-2019","page":"Changes","title":"v0.2.2. Dec 23, 2019","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"What used to be _splice  is now + and allows now real addition (resulting in a CSC matrix)\nAdded constructors of LNK matrix from CSC matrix and vice versa\nreorganized tests","category":"page"},{"location":"changes/#v0.2.1-Dec-22,-2019","page":"Changes","title":"v0.2.1 Dec 22, 2019","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"Tried to track down the source from which I learned the linked list based struct in order to document this. Ended up with SPARSEKIT of Y.Saad, however I believe this  already was in SPARSEPAK by Chu,George,Liu.\nInternal rename of SparseMatrixExtension to SparseMatrixLNK. ","category":"page"},{"location":"changes/#v0.2-Dec-21,-2019","page":"Changes","title":"v0.2 Dec 21, 2019","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"more interface methods delegating to csc, in particular mul! and ldiv!\nlazy creation of extendable part: don't create idle memory\nnicer constructors","category":"page"},{"location":"changes/#V0.1,-July-2019","page":"Changes","title":"V0.1, July 2019","text":"","category":"section"},{"location":"changes/","page":"Changes","title":"Changes","text":"Initial release","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Markdown\nMarkdown.parse(\"\"\"\n$(read(\"../../README.md\",String))\n\"\"\")","category":"page"},{"location":"example/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"example/#Matrix-creation","page":"Examples","title":"Matrix creation","text":"","category":"section"},{"location":"example/","page":"Examples","title":"Examples","text":"An ExtendableSparseMatrix can serve as a drop-in replacement for SparseMatrixCSC, albeit with faster assembly during the buildup phase when using index based access. That means that code similar to the following example should be fast enough to avoid the assembly steps using the coordinate format:","category":"page"},{"location":"example/","page":"Examples","title":"Examples","text":"using ExtendableSparse # hide\nn=3\nA=ExtendableSparseMatrix(n,n)\nfor i=1:n-1\n    A[i,i+1]=i\nend\nA","category":"page"},{"location":"example/#Benchmark","page":"Examples","title":"Benchmark","text":"","category":"section"},{"location":"example/","page":"Examples","title":"Examples","text":"The method fdrand  creates a matrix similar to the discetization matrix of a Poisson equation on a d-dimensional cube. The code uses the index access API for the creation of the matrix. This approach is considerably faster with  the ExtendableSparseMatrix which uses a linked list based structure  SparseMatrixLNK to grab new entries.","category":"page"},{"location":"example/","page":"Examples","title":"Examples","text":"using ExtendableSparse # hide\nusing SparseArrays     # hide\nusing BenchmarkTools   # hide\n\n@benchmark fdrand(30,30,30, matrixtype=ExtendableSparseMatrix);","category":"page"},{"location":"example/","page":"Examples","title":"Examples","text":"using ExtendableSparse # hide\nusing SparseArrays     # hide\nusing BenchmarkTools   # hide\n\n@benchmark fdrand(30,30,30, matrixtype=SparseMatrixCSC);","category":"page"},{"location":"example/#Matrix-update","page":"Examples","title":"Matrix update","text":"","category":"section"},{"location":"example/","page":"Examples","title":"Examples","text":"For repeated calculations on the same sparsity structure (e.g. for time dependent problems or Newton iterations) it is convenient to skip all but the first creation steps and to just replace the values in the matrix after setting then elements of the nzval  vector to zero. Typically in finite element and finite volume methods this step updates matrix entries (most of them several times) by adding values. In this case, the current indexing interface of Julia requires to access the matrix twice:","category":"page"},{"location":"example/","page":"Examples","title":"Examples","text":"using SparseArrays     # hide\nA=spzeros(3,3)\nMeta.@lower A[1,2]+=3","category":"page"},{"location":"example/","page":"Examples","title":"Examples","text":"For sparse matrices this requires to the index search in the structure twice. The packages provides the method updateindex! for both SparseMatrixCSC and  for ExtendableSparse which allows to update a matrix element with one index search.","category":"page"},{"location":"example/#Benchmark-for-SparseMatrixCSC","page":"Examples","title":"Benchmark for SparseMatrixCSC","text":"","category":"section"},{"location":"example/","page":"Examples","title":"Examples","text":"using ExtendableSparse # hide\nusing SparseArrays     # hide\nusing BenchmarkTools   # hide\n\nA=fdrand(30,30,30, matrixtype=SparseMatrixCSC);\n@benchmark fdrand!(A,30,30,30, update=(A,v,i,j)-> A[i,j]+=v);","category":"page"},{"location":"example/","page":"Examples","title":"Examples","text":"using ExtendableSparse # hide\nusing SparseArrays     # hide\nusing BenchmarkTools   # hide\n\nA=fdrand(30,30,30, matrixtype=SparseMatrixCSC);\n@benchmark fdrand!(A,30,30,30, update=(A,v,i,j)-> updateindex!(A,+,v,i,j));","category":"page"},{"location":"example/#Benchmark-for-ExtendableSparseMatrix","page":"Examples","title":"Benchmark for ExtendableSparseMatrix","text":"","category":"section"},{"location":"example/","page":"Examples","title":"Examples","text":"using ExtendableSparse # hide\nusing BenchmarkTools   # hide\n\nA=fdrand(30,30,30, matrixtype=ExtendableSparseMatrix);\n@benchmark fdrand!(A,30,30,30, update=(A,v,i,j)-> A[i,j]+=v);","category":"page"},{"location":"example/","page":"Examples","title":"Examples","text":"using ExtendableSparse # hide\nusing BenchmarkTools   # hide\n\nA=fdrand(30,30,30, matrixtype=ExtendableSparseMatrix);\n@benchmark fdrand!(A,30,30,30, update=(A,v,i,j)-> updateindex!(A,+,v,i,j));","category":"page"},{"location":"example/","page":"Examples","title":"Examples","text":"Note that the update process for ExtendableSparse is slightly slower than for SparseMatrixCSC due to the overhead which comes from checking the presence of new entries.","category":"page"}]
}
